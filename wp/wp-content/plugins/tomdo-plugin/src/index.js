import {registerBlockType} from '@wordpress/blocks';
import Header from './components/Header';
import Footer from './components/Footer';
import LoveUsing from './components/LoveUsing';
import Static1 from './components/Static1';
import SystemReqs from './components/SystemReqs';
import {RichText} from '@wordpress/block-editor';
import './components/Sectionsummary.css';
import Pagejump from './components/Pagejump';
import Banner from './components/Banner';
import './components/Banner.css';
import Triplesvg from './components/Triplesvg';
import Gallery from './components/Gallery';
import Featuretable from './components/Featuretable';
import Accordion from './components/Accordion';
const { withSelect } = wp.data;


registerBlockType('gtcb-blocks/custom-block',{
    title:'VinylMaster Footer',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Footer/>),
    save: () => (<Footer/>)
});

registerBlockType('gtcb-blocks/custom-block2',{
    title:'VinylMaster Header',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Header/>),
    save: () => (<Header/>)
});

registerBlockType('gtcb-blocks/custom-block3',{
    title:'VinylMaster LoveUsing',
    icon: 'index-card',
    category : 'common',

    edit: () => (<LoveUsing/>),
    save: () => (<LoveUsing/>)
});

registerBlockType('gtcb-blocks/custom-block4',{
    title:'VinylMaster Static1',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Static1/>),
    save: () => (<Static1/>)
});

registerBlockType('gtcb-blocks/custom-block5',{
    title:'VinylMaster System Requirements',
    icon: 'index-card',
    category : 'common',

    edit: () => (<SystemReqs/>),
    save: () => (<SystemReqs/>)
});



registerBlockType('gtcb-blocks/custom-block6',{
    title:'VinylMaster Section Summary Dark',
    icon: 'index-card',
    category : 'common',

    attributes: {
        headerText: {
            type: 'array',
            source: 'children',
            selector : 'h3'
        },
        bodyText: {
            type: 'array',
            source: 'children',
            selector : '.thetext'
        }
    },

    edit: (props) => {
        let {attributes: {headerText,bodyText}, setAttributes } = props;

        return(
            <div className= "sectionsummary" style={{backgroundColor : "#DEDEDE"}}> 
                <RichText
                tagName="h3"
                placeholder={'Header Text'}
                value = {headerText}
                onChange={(value) => setAttributes({headerText: value})}                
                /> 
                <RichText
                tagName="div"
                placeholder={'Body Text'}
                value = {bodyText}
                onChange={(value) => setAttributes({bodyText: value})}      
                className="thetext"
                />            
            </div>                 
        );
    },
    save: (props) => {
        let {attributes: {headerText,bodyText} } = props;

        return(
            <div className= "sectionsummary" style={{backgroundColor : "#DEDEDE"}}> 
                <RichText.Content
                tagName="h3"
                value = {headerText}            
                /> 
                <RichText.Content
                tagName="div"
                value = {bodyText}    
                className="thetext"                
                />             
            </div>                 
        );
    }
});

registerBlockType('gtcb-blocks/custom-block7',{
    title:'VinylMaster Pagejumper',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Pagejump/>),
    save: () => (<Pagejump/>)
});

registerBlockType('gtcb-blocks/custom-block8',{
    title:'VinylMaster Section Summary',
    icon: 'index-card',
    category : 'common',

    attributes: {
        headerText: {
            type: 'array',
            source: 'children',
            selector : 'h3'
        },
        bodyText: {
            type: 'array',
            source: 'children',
            selector : '.thetext'
        }
    },

    edit: (props) => {
        let {attributes: {headerText,bodyText}, setAttributes } = props;

        return(
            <div className= "sectionsummary"> 
                <RichText
                tagName="h3"
                placeholder={"Header Text"}
                value = {headerText}
                onChange={(value) => setAttributes({headerText: value})}                
                /> 
                <RichText
                tagName="div"
                placeholder={"Body Text"}
                value = {bodyText}
                onChange={(value) => setAttributes({bodyText: value})}      
                className="thetext"
                />            
            </div>                 
        );
    },
    save: (props) => {
        let {attributes: {headerText,bodyText} } = props;

        return(
            <div className= "sectionsummary"> 
                <RichText.Content
                tagName="h3"
                value = {headerText}            
                /> 
                <RichText.Content
                tagName="div"
                value = {bodyText}    
                className="thetext"                
                />             
            </div>                 
        );
    }
});

registerBlockType('gtcb-blocks/custom-block9',{
    title:'VinylMaster Banner',
    icon: 'index-card',
    category : 'common',

    attributes: {
        mediaId: {
            type: 'number',
            default: 0
        },
        mediaUrl: {
            type: 'string',
            default: ''
        }
    },

    edit: withSelect((select, props) => {
        return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
    })(Banner),

    save: (props) => {

        const { attributes } = props;

        const blockStyle = {
            backgroundImage: attributes.mediaUrl != 0 ? 'url("' + attributes.mediaUrl + '")' : 'none'
        };
     
        return(
            <div style={blockStyle} className="Banner">  
                <div className="container">
                    <h2>VinylMaster CUT V5</h2>
                    <h3>Basic Vinyl Cutting Software</h3>
                    <div className="firstrow">
                        <div className="roundbutton">Buy Now</div><div className="roundbutton">Upgrade To V5</div>
                    </div>
                    <br/>
                    <div className="roundbutton download">Download FREE Demo</div>
                </div>                  
            </div>
        );
    }
});

registerBlockType('gtcb-blocks/custom-block10',{
    title:'VinylMaster Triplesvg',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Triplesvg/>),
    save: () => (<Triplesvg/>)
});

registerBlockType('gtcb-blocks/custom-block11',{
    title:'VinylMaster Feature Table',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Featuretable/>),
    save: () => (<Featuretable/>)
});

registerBlockType('gtcb-blocks/custom-block12',{
    title:'VinylMaster Gallery',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Gallery/>),
    save: () => (<Gallery/>)
});

registerBlockType('gtcb-blocks/custom-block13',{
    title:'VinylMaster Accordion',
    icon: 'index-card',
    category : 'common',

    edit: () => (<Accordion/>),
    save: () => (<Accordion/>)
});