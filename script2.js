async function displayDepartments() {
    const obj = await fetchDepartmentOptions()
    obj.departments.forEach((item) => {
      const option = document.createElement('option')
      option.value = item.displayName
      option.setAttribute('id', item.departmentId)
      option.innerHTML = item.displayName
      document.getElementById('department').appendChild(option)
    })
  }
  
  function fetchDepartmentOptions() {
    return fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/departments'
    )
      .then((response) => response.json())
      .then((data) => {
        return data
      })
  }
  
  function fetchDepartmentId() {
    var select = document.getElementById('department')
    var value = select.options[select.selectedIndex].id
    return value
  }
  function fetchKeyword() {
    return document.getElementById('input').value
  }
  
  async function fetchSortedIds() {
    return fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${await fetchDepartmentId()}&q=${await fetchKeyword()}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data
      })
  }
  
  function fetchDataUsingId(id) {
    return fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id
    )
      .then((response) => response.json())
      .then((data) => {
        return data
      })
  }
  
  async function init() {
    await displayDepartments()
  }
  
  async function filterFetchData() {
    const data = await fetchSortedIds()
    if (data.total == 0) {
      return null
    } else {
      let count = 0
      return data.objectIDs.filter((item) => {
        while (count < 20) {
          count++
          return item
        }
      })
    }
  }
  
  async function displayImgs() {
    let newList = await filterFetchData()
    newList &&
      newList.forEach(async (item) => {
        const data = await fetchDataUsingId(item)
        const img = document.createElement('img')
        img.setAttribute('src', data.primaryImage)
        img.style.height = '200px'
        const display = document.getElementById('display')
        display.appendChild(img)
        console.log(data.primaryImage)
      })
  }
  