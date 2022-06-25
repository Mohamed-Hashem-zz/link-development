import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='container'>
                <button className='btn btn-danger my-4 text-center'>view all news</button>
                <div className='d-flex align-items-center  justify-content-between'>
                    <div className='w-25'>
                        <span className="fs-4 fw-bold">Link Development</span>
                        <p style={{ color: "rgba(94, 98, 130, 1)" }}>We make technology produce productive, adaptable and sustainable business experiences.</p>
                    </div>
                    <div className='w-50'>
                        <table class="table table-borderless">
                            <thead>
                                <tr >
                                    <th scope="col">Company</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Media</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>About</td>
                                    <td>Careers</td>
                                    <td>Mobile</td>
                                </tr>
                                <tr>
                                    <td>Help / FAG</td>
                                    <td>Press</td>
                                    <td>Affiliates</td>
                                </tr>
                                <tr>
                                    <td>News</td>
                                    <td>Photo</td>
                                    <td>Video</td>
                                </tr>
                            </tbody>
                        </table> </div>
                </div>
            </div>
        </div>
    )
}
