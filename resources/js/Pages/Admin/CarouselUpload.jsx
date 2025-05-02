import React, { useEffect } from "react";
import { useForm, router , Head } from "@inertiajs/react";
import AdminNav from "@/Components/admin/AdminNav";

export default function CarouselUpload({ carousels = [], carousel = null }) {
    const isEditing = !!carousel;

    const { data, setData, post, processing, errors, reset } = useForm({
        title: carousel?.title || '',
        description: carousel?.description || '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: data.title,
            description: data.description,
            image: data.image,
        };

        if (isEditing) {
            router.post(`/carousel/${carousel.id}`, {
                _method: 'put',
                ...formData,
            }, {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        } else {
            post('/carousel', {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        }
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this carousel?")) {
            router.delete(`/carousel/${id}`);
        }
    };

    return (
        <>

            <Head title="Carousel Upload" />
            <AdminNav />
            <div className="container mt-5">
                <h1 className="h4 mb-4">{isEditing ? 'Edit Carousel' : 'Upload Carousel'}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="form-control"
                        />
                        
                    </div>
                    <div className="mb-3">
                        <textarea
                            placeholder="Description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="form-control"
                        />
                        
                    </div>
                    <div className="mb-3">
                        {isEditing && carousel?.image && (
                            <div className="mb-2">
                                <img
                                    src={`/storage/${carousel.image}`}
                                    alt="Existing"
                                    style={{ height: '150px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            onChange={(e) => setData('image', e.target.files[0])}
                            className="form-control"
                        />
                        
                    </div>
                    <button type="submit" className="btn btn-success" disabled={processing}>
                        {isEditing ? 'Update' : 'Upload'}
                    </button>
                </form>

                <div className=" container mt-5">
                    <h2 className="h5 mb-3">Uploaded Carousels</h2>
                    {carousels?.map((item) => (
                        <div key={item.id} className="card mb-3">
                            <img
                                src={`/storage/${item.image}`}
                                className="card-img-top w-100"
                                alt={item.title}
                                style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <div className="d-flex gap-2">
                                    <a href={`/carousel/${item.id}/edit`} className="btn btn-primary">
                                        Edit
                                    </a>
                                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
