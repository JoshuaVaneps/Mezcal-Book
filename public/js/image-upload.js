console.log("Hello")

document.getElementById('upload-form').addEventListener('submit', async (event) => {
    
    event.preventDefault();
    console.log("Upload")
    const fileInput = event.target.querySelector('[name="image_file"]');
    console.log(fileInput);       
    const formData = new FormData();
    console.log(formData);
    const file = fileInput.files[0];
    console.log(file)
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
        // Valid image type, add to FormData
        formData.append('image_file', file);
    }
    
    //     try {
//         const response = await fetch('https://example.com/upload', {
//             method: 'POST',
//             body: formData,
//         });

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
});