import React from "react";
import {useForm , router , Head} from "@inertiajs/react";
import AdminNav from "@/Components/admin/AdminNav";



export default function LatestNewsUpload({latestnews, news=null}) {
    const isEditing = !!news;


    const {data, setData , post , reset}=useForm({
        title :news?.title || '',
        description :news?.description || '',
        image : null,
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: data.title,
            description: data.description,
            image: data.image,
        };
        if (isEditing) {
            router.post(`/news/${news.id}`, {
                _method: 'put',
                ...formData,
            }, {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        } else {
            post('/news', {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        }
    }

     const handleDelete =(id)=>{
            if (confirm('Are you sure you want to delete this news?')){
                router.delete(`/news/${id}`);
            }
        }

    return (<>
        <Head title="Latest News Upload" />
            <AdminNav></AdminNav>   
            <div className="container mt-5">
        <h1 className="h4 mb-4">{isEditing ? 'edit news':'Upload News'}</h1>
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
                {
                    isEditing && news?.image && (
                        <img
                            src={`/storage/${news.image}`}
                            alt={news.title}
                            className="img-fluid mb-3"
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                    )
                }
            </div>
            <div className="mb-3">
                <input
                    type="file"
                    onChange={(e) => setData('image', e.target.files[0])}
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-success">
             {isEditing ? 'Update' : 'Upload'}
            </button>
        </form>

        <div className="mt-5">
            <h2 className="h5 mb-3">Uploaded Carousels</h2>
            {latestnews?.map((item) => (
                <div key={item.id} className="card mb-3">
                    <img
                        src={`/storage/${item.image}`}
                        className="card-img-top"
                        alt={item.title}
                        style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href={`/news/${item.id}/edit`} className="btn btn-primary m-2">
                                        Edit
                                    </a>
                        <button className="btn btn-danger " onClick={()=> handleDelete(item.id)}>delete</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    </>)

}