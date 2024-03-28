'use client'
import { useFormik } from 'formik';
import React from 'react'

const UploadPost = () => {

    const postForm = useFormik({
        initialValues: {
            uploadedBy: '',
            title: '',
            image: '',
            uploadDate: new Date()
        },
        onSubmit: (values) => {
            console.log(values);

            //sending request to backend
            fetch('http://localhost:5000/post/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
        }
    })

    return (
        <div>

            <div className="container">
                <div className="card">
                    <div className="card-body">
                            <form onSubmit={postForm.handleSubmit}>
                                <div class="mb-3">
                                    <label for="" class="form-label">Uploaded By</label>
                                    <input
                                        type="text"
                                        id="uploadedBy"
                                        onChange={postForm.handleChange}
                                        value={postForm.values.uploadedBy}
                                        class="form-control"
                                        placeholder=""
                                        aria-describedby="helpId"
                                    />
                                    <small id="helpId" class="text-muted">Help text</small>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        onChange={postForm.handleChange}
                                        value={postForm.values.title}
                                        class="form-control"
                                        placeholder=""
                                        aria-describedby="helpId"
                                    />
                                    <small id="helpId" class="text-muted">Help text</small>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Image</label>
                                    <input
                                        type="text"
                                        id="image"
                                        onChange={postForm.handleChange}
                                        value={postForm.values.image}
                                        class="form-control"
                                        placeholder=""
                                        aria-describedby="helpId"
                                    />
                                    <small id="helpId" class="text-muted">Help text</small>
                                </div>
                                
                                    <button type='submit' className='btn btn-primary mt-3'>Upload Post</button>
                            </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UploadPost;


// Request Method
// 1. POST - used to
// 2. GET - 
// 3. PUT - 
// 4. DELETE - 


// install CORS in backend - npm i cors

// JS-JSON : JSON.stringify
// JSON-JS : JSON.parse