import React from 'react'
import { useNavigate } from 'react-router-dom';

const ColorProfiles = () => {
    const history = useNavigate();
    const handleback = () => {
        history('/');
    }
    return (
        <div className='container'>
            <div className="backbutton">
                <button onClick={handleback}
                    style={{
                        position: 'absolute',
                        width: 150,
                        height: 45,
                        left: 87,
                        top: 25,

                        background: '#D69F9F',
                        borderRadius: 10,
                        cursor: 'pointer',
                        color: 'white'
                    }}
                >Back To Home</button>

                <div className='conatiner' style={{
                    position: 'absolute',
                    width: 1150,
                    height: 500,
                    left: 87,
                    top: 92,

                    background: '#D9D9D9'
                }}>
                    <div className="discription">
                        <div style={{ margin: 100, fontSize: 20 }}>
                            <h4>Task : Color Profiles </h4>
                            <h4>Type : Enquiry</h4>
                            <h4>Start : 2013-02-06</h4>
                            <h4>End : 2013-02-09 </h4>
                            <h4>Details : This actualy dint take any color profile</h4>
                        </div>

                    </div>
                    <div className="image">
                        <img src="https://media.istockphoto.com/photos/mind-painting-backdrop-image-picture-id469691828?b=1&k=20&m=469691828&s=170667a&w=0&h=G45KryqN80ZYWCgdOsJn_XCMITQU8NQF03glkj15ytQ=" alt="#picuture"
                            style={{
                                position: 'absolute',
                                width: 570,
                                height: 500,
                                left: 580,
                                top: 0,

                                background: '#D9D9D9',
                            }}
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ColorProfiles;