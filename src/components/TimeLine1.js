import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {useNavigate } from "react-router-dom";



import styles from '../styles/timeline.module.css'

const TimeLine1 = (props) => {
  let history = useNavigate();

const handleconcept = ()=>{
  history('/conceptualize');
}
const handlesketch = ()=>{
  history('/sketch');
}
const handleprofile = ()=>{
  history('/colorprofiles');
}
const handlehtml = ()=>{
  history('/html');
}
const handlewritethejs = ()=>{
  history('/writethejs');
}
const handleadvertise = ()=>{
  history('/advertise');
}
const handlespamlink = ()=>{
  history('/spamlink');
}
const handleeat = ()=>{
  history('/eat');
}
const handledeliverytask = ()=>{
  history('/deliverytask');
}


  return (

    <div className={styles['desktop1']}>

      <div className={styles['frame1']}>
        <div className={styles['frame4']}>
          <span className={styles['text']}>
            <span>Enquiry</span>
          </span>
        </div>
        <div className={styles['frame5']}>
          <span className={styles['text02']}>
            <span>Booking</span>
          </span>
        </div>
        <div className={styles['frame6']}>
          <span className={styles['text04']}>
            <span>Retail</span>
          </span>
        </div>
        <span className={styles['text06']}>
          <span>Delivery</span>
        </span>
      </div>

      <span className={styles['text08']}>
        <span>Timeline</span>
      </span>


      <img
        src="/playground_assets/line11311-5v6a.svg"
        alt="Line11311"
        className={styles['line1']}
      />
      <div className={styles['frame7']}>
        <span className={styles['text10']}>
          <span>28 Jan</span>
        </span>
        <span className={styles['text12']}>
          <span>29Jan</span>
        </span>
        <span className={styles['text14']}>
          <span>30 Jan</span>
        </span>
        <span className={styles['text16']}>
          <span>31Jan</span>
        </span>
        <span className={styles['text18']}>
          <span>1 Feb</span>
        </span>
        <span className={styles['text20']}>
          <span>2 Feb</span>
        </span>
        <span className={styles['text22']}>
          <span>3 Feb</span>
        </span>
        <span className={styles['text24']}>
          <span>
            4 Feb
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className={styles['text26']}>
          <span>5 Feb</span>
        </span>
        <span className={styles['text28']}>
          <span>6 Feb</span>
        </span>
        <span className={styles['text30']}>
          <span>7 Feb</span>
        </span>
        <span className={styles['text32']}>
          <span>8 Feb</span>
        </span>
        <span className={styles['text34']}>
          <span>9 Feb</span>
        </span>
        <span className={styles['text36']}>
          <span>10 Feb</span>
        </span>
        <span className={styles['text38']}>
          <span>11 Feb</span>
        </span>
        <span className={styles['text40']}>
          <span>12 Feb</span>
        </span>
        <span className={styles['text42']}>
          <span>13 Feb</span>
        </span>
        <span className={styles['text44']}>
          <span>14 Feb</span>
        </span>
        <span className={styles['text46']}>
          <span>15 Feb</span>
        </span>
        <span className={styles['text48']}>
          <span>16 Feb</span>
        </span>
      </div>

      <div className={styles['frame9']}>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : conceptualize </h4>
            <h4>Type : Enquiry</h4>
            <h4>Start : 2013-01-28</h4>
            <h4>End : 2013-02-1 </h4>
            <h4>Details : This actualy dint take any conceptualize</h4>
          </div>
        }>
          <button className={styles['rectangle1']} onClick={handleconcept}>
            conceptualize
          </button>
        </Tippy>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : Sketch </h4>
            <h4>Type : Enquiry</h4>
            <h4>Start : 2013-02-01</h4>
            <h4>End : 2013-02-06 </h4>
            <h4>Details : This actualy dint take any sketch</h4>
          </div>
        }>
          <button className={styles['rectangle2']} onClick={handlesketch}>
            sketch
          </button>
        </Tippy>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : Color Profiles </h4>
            <h4>Type : Enquiry</h4>
            <h4>Start : 2013-02-06</h4>
            <h4>End : 2013-02-09 </h4>
            <h4>Details : This actualy dint take any color profile</h4>
          </div>
        }>
          <button className={styles['rectangle3']} onClick={handleprofile}>
            color profiles
          </button>
        </Tippy>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : HTML </h4>
            <h4>Type : Booking</h4>
            <h4>Start : 2013-02-02</h4>
            <h4>End : 2013-02-06 </h4>
            <h4>Details : This actualy dint take any html</h4>
          </div>
        }>
          <button className={styles['rectangle4']} onClick={handlehtml}>
            HTML
          </button>
        </Tippy>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : write the JS </h4>
            <h4>Type : Booking</h4>
            <h4>Start : 2013-02-06</h4>
            <h4>End : 2013-02-09 </h4>
            <h4>Details : This actualy dint take any write the JS</h4>
          </div>
        }>
          <button className={styles['rectangle5']} onClick={handlewritethejs}>
            write the JS
          </button>
        </Tippy>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : Advertise </h4>
            <h4>Type : Retail</h4>
            <h4>Start : 2013-02-09</h4>
            <h4>End : 2013-02-12 </h4>
            <h4>Details : This actualy dint take any advertise</h4>
          </div>
        }>
          <button className={styles['rectangle6']} onClick={handleadvertise}>
            advertise
          </button>
        </Tippy>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : spam links </h4>
            <h4>Type : Retail</h4>
            <h4>Start : 2013-02-12</h4>
            <h4>End : 2013-02-14</h4>
            <h4>Details : This actualy dint take any spam links</h4>
          </div>
        }>
          <button className={styles['rectangle7']} onClick={handlespamlink}>
            spam links
          </button>
        </Tippy>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : eat </h4>
            <h4>Type : Delivery</h4>
            <h4>Start : 2013-02-08</h4>
            <h4>End : 2013-02-13 </h4>
            <h4>Details : This actualy dint eat</h4>
          </div>
        }>
          <button className={styles['rectangle8']} onClick={handleeat}>
            eat
          </button>
        </Tippy>
        <Tippy placement='bottom' content={
          <div style={{ background: "red", width: 170, height: 200 }}>
            <h4>Task : Delivery Task </h4>
            <h4>Type : Delivery</h4>
            <h4>Start : 2013-02-06</h4>
            <h4>End : 2013-02-09 </h4>
            <h4>Details : This actualy dint take any Delivery Task</h4>
          </div>
        }>
          <button className={styles['rectangle9']} onClick={handledeliverytask}>
            Delivery Task
          </button>
        </Tippy>










        <img
          src="/playground_assets/line25528-u4p.svg"
          alt="Line25528"
          className={styles['line2']}

        />
        <img
          src="/playground_assets/line35529-3t0d.svg"
          alt="Line35529"
          className={styles['line3']}
        />
        <img
          src="/playground_assets/line45530-95yf.svg"
          alt="Line45530"
          className={styles['line4']}
        />
        <img
          src="/playground_assets/line55531-y0vt.svg"
          alt="Line55531"
          className={styles['line5']}
        />
        <img
          src="/playground_assets/line65532-ua.svg"
          alt="Line65532"
          className={styles['line6']}
        />
        <img
          src="/playground_assets/line75533-1as9.svg"
          alt="Line75533"
          className={styles['line7']}
        />
        <img
          src="/playground_assets/line85534-wxvdq.svg"
          alt="Line85534"
          className={styles['line8']}
        />
        <img
          src="/playground_assets/line95535-ly4s.svg"
          alt="Line95535"
          className={styles['line9']}
        />
        <img
          src="/playground_assets/line105536-qlf8.svg"
          alt="Line105536"
          className={styles['line10']}
        />
        <img
          src="/playground_assets/line115537-fnsc.svg"
          alt="Line115537"
          className={styles['line11']}
        />
        <img
          src="/playground_assets/line125538-01wa.svg"
          alt="Line125538"
          className={styles['line12']}
        />
        <img
          src="/playground_assets/line135539-de4z.svg"
          alt="Line135539"
          className={styles['line13']}
        />
        <img
          src="/playground_assets/line145541-yiaal.svg"
          alt="Line145541"
          className={styles['line14']}
        />
        <img
          src="/playground_assets/line155542-8f4j.svg"
          alt="Line155542"
          className={styles['line15']}
        />
        <img
          src="/playground_assets/line165543-ejxh.svg"
          alt="Line165543"
          className={styles['line16']}
        />
        <img
          src="/playground_assets/line175544-7x3.svg"
          alt="Line175544"
          className={styles['line17']}
        />
        <img
          src="/playground_assets/line185545-2ayd.svg"
          alt="Line185545"
          className={styles['line18']}
        />
        <img
          src="/playground_assets/line195546-fbbf.svg"
          alt="Line195546"
          className={styles['line19']}
        />
        <img
          src="/playground_assets/line205547-6mon.svg"
          alt="Line205547"
          className={styles['line20']}
        />
        <img
          src="/playground_assets/line215548-z6mq.svg"
          alt="Line215548"
          className={styles['line21']}
        />

      </div>


    </div>

  )
}

export default TimeLine1;
