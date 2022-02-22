//Progress bar
const skillsSection = document.getElementById('skills-section');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    })
}

function hideProgress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll',()=> {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;  //or move this (/1.5), or add /2.Chose what u like

    if(sectionPos < screenPos){
        showProgress();
        
    }else{
        hideProgress();
        
    }
});
//Progress bar END