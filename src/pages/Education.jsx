import React from 'react'

const Education = () => {
  return (
    <div id="edu" className='mt-3'>
        <div className="sec-head text-center">
            <h3>Education</h3>
        </div>
        <div className="edu-container">

            <ul>
                <li>
                    <h5>S.S.C.</h5>
                    <h6>Lourdes Convent School</h6>
                    <p>2017 - 2018</p>
                </li>
                <li>
                    <h5>H.S.C.</h5>
                    <h6>St. Xavier's School</h6>
                    <p>2019 - 2020</p>
                </li>
                <li>
                    <h5>B.E. Computer Science & Engineering</h5>
                    <h6>R.N.G.P.I.T.</h6>
                    <p>2020 - Present</p>
                </li>
            </ul>
            <div className="edu-img">
                <img src="./edu6.jpg" alt="Education" />
            </div>
        </div>
    </div>
  )
}

export default Education