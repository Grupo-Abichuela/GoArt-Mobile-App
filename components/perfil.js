const imgDiv = document.querySelector('.circle');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');
const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");



imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});


imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});


file.addEventListener('change', function(){
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); 

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});

edit_button.addEventListener("click", function() {
    paragraph.contentEditable = true;
    paragraph.style.backgroundColor = "#dddbdb";
    end_button.style.visibility = "visible";
  } );

end_button.addEventListener("click", function() {
    paragraph.contentEditable = false;
    paragraph.style.backgroundColor = "transparent";
    end_button.style.visibility = "hidden";
  } )