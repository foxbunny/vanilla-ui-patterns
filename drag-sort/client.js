{
  'use strict'

  let
    $tasks = document.getElementById('tasks'),
    $dragGhost = Object.assign(document.createElement('div'), { hidden: true })

  let
    startFLIP = $ => {
      // More about FLIP animation:
      //
      // https://css-tricks.com/animating-layouts-with-the-flip-technique/

      let initialY = $.offsetTop
      return {
        initialY, // we also return the initial offset as that's used to
                  // calculate whether the dragged task is above or below
                  // the target
        run: () => {
          let
            finalY = $.offsetTop,
            animation = $.animate([
              { transform: `translateY(${initialY - finalY}px` },
              { transform: 'none' },
            ], { duration: 200 })
          // Mark the element as animating so that we can prevent multiple
          // animation for the same element from starting in parallel
          $.isAnimating = true
          // We return a promise that resolves once the animation ends. This
          // gives us synchronization between multiple animations for free via
          // Promise.all().
          return new Promise(res => {
            animation.addEventListener('finish', () => {
              delete $.isAnimating
              res()
            })
          })
        },
      }
    },
    swapElements = ($task, $target) => {

      // Initialize the FLIP animation
      let
        taskFLIP = startFLIP($task),
        targetFLIP = startFLIP($target)

      // We need to decide how to swap the elements. If the target is above the
      // task being dragged, then we can swap them using `insertBefore()`.
      if (taskFLIP.initialY > targetFLIP.initialY) $tasks.insertBefore($task, $target)
        // If the target is below the task being dragged, we have two options.
        // The first option is that the target has a next sibling fieldset, in
      // which case we can swap the dragged task with that sibling.
      else if ($target.nextElementSibling) $tasks.insertBefore($task, $target.nextElementSibling)
        // If the target has no next sibling, it means we're at the end of the
      // list, so we can simply append the dragged task.
      else $tasks.append($task)
      // Note that in all of the above cases, inserting/appending the dragged
      // task automatically removes it from the previous location because DOM
      // nodes can only be moved from one place to another unless we explicitly
      // clone them first.

      // Run the animations and resolve when both are finished
      return Promise.all([taskFLIP.run(), targetFLIP.run()])
    },
    markTaskAsDragging = $task => {
      $tasks.$draggedTask = $task
      $task.dataset.dragging = true
    },
    unmarkDraggedTaskAsDragging = () => {
      delete $tasks.$draggedTask.dataset.dragging
      delete $tasks.$draggedTask
    },
    markFormAsDragging = () => {
      $tasks.dataset.dragging = true
    },
    unmarkFormAsDragging = () => {
      delete $tasks.dataset.dragging
    },
    updateTaskPriorities = () => {
      for (let i = 0; i < $tasks.children.length; i++)
        $tasks.children[i].elements.priority.value = i + 1
    },
    swapElementsNow = ($task, $target) => {
      markTaskAsDragging($task)
      swapElements($task, $target)
        .then(unmarkDraggedTaskAsDragging)
      updateTaskPriorities()
      $task.focus()
    }

  for (let $ of $tasks.children) {
    // Make all fieldsets as draggable
    $.draggable = true
    // Hide the priority field because it will be controlled by our drag and
    // keyboard actions
    $.querySelector('[name=priority]').type = 'hidden'
  }

  // Add the drag ghost to the document
  document.body.append($dragGhost)

  $tasks.ondragstart = ev => {
    markTaskAsDragging(ev.target)
    markFormAsDragging()
    ev.dataTransfer.setDragImage($dragGhost, 0, 0)
  }
  $tasks.ondragover = ev => {
    // dragover will also trigger on the form itself, which we ignore
    if (!ev.target.matches('fieldset')) return

    let
      $task = $tasks.$draggedTask,
      $target = ev.target

    // If we are currently swapping elements, do nothing
    if ($task.isAnimating) return
    // If we're dragging over the element being dragged, ignore it
    if ($task === $target) return
    swapElements($task, $target)
  }
  $tasks.ondragend = () => {
    unmarkDraggedTaskAsDragging()
    unmarkFormAsDragging()
    updateTaskPriorities()
  }
  $tasks.onkeydown = ev => {
    if (!ev.target.matches('fieldset')) return

    let $task = ev.target

    switch (ev.code) {
      case 'ArrowUp':
        if (!$task.previousElementSibling) return
        swapElementsNow($task, $task.previousElementSibling)
        break
      case 'ArrowDown':
        if (!$task.nextElementSibling) return
        swapElementsNow($task, $task.nextElementSibling)
        break
    }
  }
}
