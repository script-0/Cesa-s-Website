const selectedDepartment = document.querySelector(".selected-department");
const optionsContainerDepartment = document.querySelector(".options-container-department");
const selectedDepartmentName = document.querySelector(".selected-department-name");

const departmentOptionsList = document.querySelectorAll(".options-container-department .option");


const selectedLevel = document.querySelector(".selected-level");
const optionsContainerLevel = document.querySelector(".options-container-level");
const selectedLevelName = document.querySelector(".selected-level-name");

selectedDepartment.addEventListener("click", () => {
  optionsContainerDepartment.classList.toggle("active");
});

optionsContainerDepartment.addEventListener("mouseleave",()=>{
    optionsContainerDepartment.classList.remove("active");
})

departmentOptionsList.forEach(o => {
  o.addEventListener("click", () => {      
    selectedDepartment.classList.remove("initial");
    selectedDepartmentName.innerHTML = o.querySelector("label").innerHTML;
    let department = o.querySelector("label").innerHTML;
    if(department == "MSP"){
        optionsContainerLevel.innerHTML =   '<div class="option">'+
                                                '<input type="radio" class="radio" id="level1"/>'+
                                                '<label for="level1">01</label>'+
                                            '</div>'+
                                            '<div class="option">'+
                                                '<input type="radio" class="radio" id="level2"/>'+
                                                '<label for="level2">02</label>'+
                                            '</div>';
    }else{
        optionsContainerLevel.innerHTML =   '<div class="option">'+
                                                '<input type="radio" class="radio" id="level3"/>'+
                                                '<label for="level3">03</label>'+
                                            '</div>'+
                                            '<div class="option">'+
                                                '<input type="radio" class="radio" id="level4"/>'+
                                                '<label for="level4">04</label>'+
                                            '</div>'+
                                            '<div class="option">'+
                                                '<input type="radio" class="radio" id="level5"/>'+
                                                '<label for="level5">05</label>'+
                                            '</div>';
    }
    selectedLevelName.innerHTML = "Select your level";
    selectedLevel.classList.add("initial");
    bindClick();
    optionsContainerDepartment.classList.remove("active");
  });
});

selectedLevel.addEventListener("click", () => {
  optionsContainerLevel.classList.toggle("active");
});

optionsContainerLevel.addEventListener("mouseleave",()=>{
    optionsContainerLevel.classList.remove("active");
});

function bindClick(){
    let levelOptionsList = document.querySelectorAll(".options-container-level .option");
    levelOptionsList.forEach(o => {
      o.addEventListener("click", () => {
        selectedLevel.classList.remove("initial");
        selectedLevelName.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerLevel.classList.remove("active");
      });
    });
}
