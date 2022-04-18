import React from 'react'
import myimg from '../../images/2022-02-14.jpg'
export default function About() {
    return (
        <div  className='container mx-auto w-5/6'>
            <div class="card w-96 glass">
                <figure><img src={myimg} className="w-64" alt="!"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Md Amam Uddin srabon</h2>
                    <p>Hello Im Srabon , Im From Bangladesh. Im a student of Computer Science and Engineering of National University Bangladesh. I enrolled this course to be a full stack developer.By the Grace of Almighty Im still trying to commited to see the end.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
