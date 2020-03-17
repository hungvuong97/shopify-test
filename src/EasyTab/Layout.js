import React from 'react'
import {connect} from 'react-redux'
export default class Layout extends React.Component{
    render(){
        return (
            <div>
                <h3>Accordion mode preview</h3> 
                <select>
                    <option>Description text goes here</option>
                </select>
                <select>
                <option>
                    Parameter 1: value
                    Parameter 2: value
                    </option>
                </select>
                <select>
                <option>
                    Parameter 3: value
                    Parameter 4: value
                    </option>
                </select>
                <br/>
                <div>
                    <h3>Select tabs layout</h3>
                    <p>Tab</p>
                    <label>
                    <input type="radio" name="tab"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-layout-selector-1.png"></img>
                    </label>
                    <label>
                    <input type="radio" name="tab"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-layout-selector-2.png"></img>
                    </label>
                    <label>
                    <input type="radio" name="tab"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-layout-selector-3.png"></img>
                    </label>
                    <label>
                    <input type="radio" name="tab"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-layout-selector-4.png"></img>
                    </label>
                    <label>
                    <input type="radio" name="tab"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-layout-selector-5.png"></img>
                    </label>
                    <label>
                    <input type="radio" name="tab"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-layout-selector-6.png"></img>
                    </label>
                    <label>
                    <input type="radio" name="tab"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-layout-selector-7.png"></img>
                    </label>
                    <label>
                    <input type="radio" name="tab"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-layout-selector-8.png"></img>
                    </label>
                 <p>Accordion</p>
                 <label>
                    <input type="radio" name="accordion"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-accordion-layout-selector-1.png"></img>
                </label>
                <label>
                    <input type="radio" name="accordion"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-accordion-layout-selector-2.png"></img>
                </label>
                <label>
                    <input type="radio" name="accordion"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-accordion-layout-selector-3.png"></img>
                </label>
                <label>
                    <input type="radio" name="accordion"/>
                    <img src="//static.nexusmedia-ua.com/tabs/externals/images/easytabs-accordion-layout-selector-4.png"></img>
                </label>
                </div>
                <br/>
                <div>
                    <h3>Padding</h3>
                    <p> Tabs settings</p>
                    <p>Contten</p>
                </div>
            </div>
        )
    }
}