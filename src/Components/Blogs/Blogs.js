import React from 'react'

export default function Blogs() {
    return (
        <div>
            <div class="mockup-window border bg-base-300">
                <div class="grid grid-cols-1 gap-5 justify-center px-4 py-16 bg-base-200">
                    
                    <div className='card'>
                        <h1 className='text-3xl'> Differrence beteen authorization and authentication </h1>
                        <p>Authentication and authorization are the two words used in the security world. They might sound similar but are completely different from each other. Authentication is used to authenticate someone's identity, whereas authorization is a way to provide permission to someone to access a particular resource. These are the two basic security terms and hence need to be understood thoroughly. In this topic, we will discuss what authentication and authorization are and how they are differentiated from each other. </p>

                    </div>
                    <div className='card'>
                        <h1 className='text-3xl'> why using firebase? </h1>
                        <p>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                            You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.</p>
                
                    
                    </div>
                    <div className='card'>
                        <h1 className='text-3xl'> What other services provides firebase? </h1>
                        <p>
                            Firebase provides Hosting services.Firebase also provide realtime database.
                            storages and machine learning.
                            
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
