jobListEle = $('#jobs')
jobListHiddenEle = $('#hiddenJobs')
showListBtn = $('#showList')

function myFunction(x) {
    jobListEle.empty()
    jobListHiddenEle.empty()
    if (x.matches) {
      let showing = jobs.slice(0, 5)
      showing.forEach(element => {
        let position = 
          `
          <div class="job-item">
              <div class="row">
                  <div class="col-9">
                      <div class="row align-items-center">
                          <div class="col-12 col-md-6"><p class="large mb-0">${element.position}</p></div>
                          <div class="col-12 col-md-6"><p class="mb-0">${element.category}</p></div>
                      </div>
                  </div>
                  <div class="col-3 text-end d-flex justify-content-end align-items-end align-items-md-center">
                      <a class="l400 m-0" href="${element.link}">Apply &nbsp&nbsp<span class="forward-arrow"><div></div></span></a>
                  </div>
              </div>
          </div>
          `
      
        jobListEle.append(position)
    })
    
    } else {
        jobs.forEach(element => {
            let position = 
              `
              <div class="job-item">
                  <div class="row">
                      <div class="col-9">
                          <div class="row align-items-center">
                              <div class="col-12 col-md-6"><p class="large mb-0">${element.position}</p></div>
                              <div class="col-12 col-md-6"><p class="mb-0">${element.category}</p></div>
                          </div>
                      </div>
                      <div class="col-3 text-end d-flex justify-content-end align-items-end align-items-md-center">
                          <a class="l400 m-0 arrow-link" href="${element.link}">Apply &nbsp&nbsp<span class="forward-arrow"><div></div></span></a>
                      </div>
                  </div>
              </div>
              `
          
            jobListEle.append(position)
        })
    }
  }

  showListBtn.on('click', function() {
    jobListHiddenEle.empty()
    let hidden = jobs.slice(4 + 1)
    hidden.forEach(element => {
        let position = 
          `
          <div class="job-item">
              <div class="row">
                  <div class="col-9">
                      <div class="row align-items-center">
                          <div class="col-12 col-md-6"><p class="large mb-0">${element.position}</p></div>
                          <div class="col-12 col-md-6"><p class="mb-0">${element.category}</p></div>
                      </div>
                  </div>
                  <div class="col-3 text-end d-flex justify-content-end align-items-end align-items-md-center">
                      <a class="l400 m-0" href="${element.link}">Apply &nbsp&nbsp<span class="forward-arrow"><div></div></span></a>
                  </div>
              </div>
          </div>
          `
      
          jobListHiddenEle.append(position)
    })
    $('#expand').toggleClass('show-list')
  })
  
  var md = window.matchMedia("(max-width: 768px)")
  myFunction(md)
  md.addListener(myFunction)
