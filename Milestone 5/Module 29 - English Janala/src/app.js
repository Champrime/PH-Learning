let loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/words/all")
    .then(res => res.json())
    .then(dat => {console.log(dat); displayLesson(dat.data);})
}

let displayLesson = (api) => {
    // 1. get the container & empty it
    const lessons = document.getElementById("lesson");
    lessons.innerHTML = "";
    // 2. get into every element and ...*
    lessons.innerHTML = `
        <div id="lesson-container" class="flex-x flex-wrap gap-4"></div>
    `;
    api.forEach(pieceData => {
        const btn = document.createElement("button");
        btn.className = "flex-between btn btn-outline btn-primary";
        btn.innerHTML = `
          <i class="fa-solid fa-book-open"></i><span>Lesson - ${pieceData.id}</span>
          `;
        document.getElementById("lesson-container").appendChild(btn);
    })
    //     3. Create element

    //     4. Append into the container
}

loadLesson();