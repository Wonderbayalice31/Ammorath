function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch('/detect', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.error) {
            resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Your face shape is: <strong>${data.face_shape}</strong></p>`;
        }
    });
}
