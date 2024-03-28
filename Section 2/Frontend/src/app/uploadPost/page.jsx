'use client';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
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

            // sending request to backend
            fetch('http://localhost:5000/post/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then((response) => {
                console.log(response.status);
                if(response.status === 200){
                    enqueueSnackbar('Post uploaded successfully', { variant: 'success' })
                }else{
                    enqueueSnackbar('Something went wrong', { variant: 'error' })
                }
            }).catch((err) => {
                console.log(err);
                enqueueSnackbar('Something went wrong', { variant: 'error' });
            });

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