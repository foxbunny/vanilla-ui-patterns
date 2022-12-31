{
  'use strict'

  let
    tagLookup = {}

  let
    $search = document.getElementById('search'),
    $selectedTags = document.getElementById('selected-tags'),
    $tagList = document.getElementById('tags'),
    $searchCompletions = document.getElementById('search-completions')

  let
    removeTag = $checkbox => {
      $checkbox.checked = false
      $tagList.append($checkbox.parentNode)
      $search.focus()
    },
    addTag = $tag => {
      $tag.firstElementChild.checked = true
      $selectedTags.append($tag)
    }

  // Index all available tags (checkboxes) and add input completion candidates
  for (let $ of $tagList.querySelectorAll('label')) {
    let kw = $.textContent.trim()
    tagLookup[kw] = $
    $searchCompletions.append(Object.assign(document.createElement('option'), { value: kw }))
  }

  // As soon as a valid keyword is typed in, immediately add the tag.
  // Note that this only works if there are no keywords that are a substring of
  // some other keyword.
  $search.oninput = () => {
    let kwd = $search.value.trim().toLowerCase()
    if (!(kwd in tagLookup)) return
    addTag(tagLookup[kwd])
    $search.value = ''
  }
  // When Backspace is pressed inside an empty textbox, we focus the last tag
  // if there are any.
  $search.onkeydown = ev => {
    if (ev.code !== 'Backspace') return
    if ($search.value) return
    $selectedTags.lastElementChild?.focus()
  }
  // When backspace is pressed while a tag is focused, the tag is removed from
  // the list of selected tags.
  $selectedTags.onkeydown = ev => {
    if (ev.code !== 'Backspace') return
    if (!ev.target.matches('input[type=checkbox]')) return
    removeTag(ev.target)
  }
  // When a selected tag is clicked, it is removed from the list of selected
  // tags
  $selectedTags.onchange = ev => {
    if (!ev.target.matches('input[type=checkbox]')) return
    if (ev.target.checked) return
    removeTag(ev.target)
  }

  // Restore tag selection from the query parameter
  for (let v of new URLSearchParams(location.search).getAll('tag')) {
    let $tag = $tagList.querySelector(`input[type=checkbox][value="${v}"]`)?.parentNode
    addTag($tag)
  }

  // We mark the tag list fieldset as both hidden and disabled so that
  // checkboxes within the tag list are not submitted ever, even if they are
  // checked due to form autocompletion.
  $tagList.hidden = $tagList.disabled = true
  // Finally we enable the JavaScript-powered search field
  $search.closest('fieldset').hidden = false
}
