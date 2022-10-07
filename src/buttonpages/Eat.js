import React from 'react'
import { useNavigate } from 'react-router-dom';

const Eat = () => {
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
                            <h4>Task : eat </h4>
                            <h4>Type : Delivery</h4>
                            <h4>Start : 2013-02-08</h4>
                            <h4>End : 2013-02-13 </h4>
                            <h4>Details : This actualy dint eat</h4>
                        </div>

                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="#picuture"
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

export default Eat;