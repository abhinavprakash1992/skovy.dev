import React from "react";
import { PageRendererProps } from "gatsby";
import { createGlobalStyle } from "styled-components";
import Helmet from "react-helmet";

import { colors } from "../../config/colors";
import { Footer } from "../footer";
import { Header } from "../header";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
    padding: 0;
    margin: 0;
  }
`;

interface Props extends PageRendererProps {
  title: string;
}

class Layout extends React.Component<Props> {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <Helmet>
          <script>
            {`
              window['_h_debug'] = false;
              window['_h_script'] = 'https://static.highlight.run/index.js';
              window['_h_org'] = 28;
              var a0_0x1512=['_h_debug','defineProperty','_h_org','bind','type','__esModule','./firstload_src/firstload.js','exports','Module','create','getMilliseconds','appendChild','default','text/javascript','object','string','_h_script','highlight_obj','setAttribute','load','toStringTag','initialize','amd','call','ready','getElementsByTagName','addEventListener'];(function(_0x3891f5,_0x15124b){var _0x48aa64=function(_0x27aa96){while(--_0x27aa96){_0x3891f5['push'](_0x3891f5['shift']());}};_0x48aa64(++_0x15124b);}(a0_0x1512,0xb2));var a0_0x48aa=function(_0x3891f5,_0x15124b){_0x3891f5=_0x3891f5-0x0;var _0x48aa64=a0_0x1512[_0x3891f5];return _0x48aa64;};(function webpackUniversalModuleDefinition(_0x27aa96,_0x1cef18){var _0x1c23c2=a0_0x48aa;if(typeof exports==='object'&&typeof module===_0x1c23c2('0x19'))module[_0x1c23c2('0x12')]=_0x1cef18();else{if(typeof define==='function'&&define[_0x1c23c2('0x6')])define([],_0x1cef18);else{if(typeof exports===_0x1c23c2('0x19'))exports['$']=_0x1cef18();else _0x27aa96['$']=_0x1cef18();}}}(window,function(){return function(_0x58e053){var _0x38163c=a0_0x48aa,_0x36ffbc={};function _0x26daec(_0x3b621a){var _0x30ac41=a0_0x48aa;if(_0x36ffbc[_0x3b621a])return _0x36ffbc[_0x3b621a][_0x30ac41('0x12')];var _0x4ad4bd=_0x36ffbc[_0x3b621a]={'i':_0x3b621a,'l':![],'exports':{}};return _0x58e053[_0x3b621a][_0x30ac41('0x7')](_0x4ad4bd['exports'],_0x4ad4bd,_0x4ad4bd[_0x30ac41('0x12')],_0x26daec),_0x4ad4bd['l']=!![],_0x4ad4bd[_0x30ac41('0x12')];}return _0x26daec['m']=_0x58e053,_0x26daec['c']=_0x36ffbc,_0x26daec['d']=function(_0x17b3b1,_0x22077e,_0x10ad9a){!_0x26daec['o'](_0x17b3b1,_0x22077e)&&Object['defineProperty'](_0x17b3b1,_0x22077e,{'enumerable':!![],'get':_0x10ad9a});},_0x26daec['r']=function(_0x38508c){var _0x244714=a0_0x48aa;typeof Symbol!=='undefined'&&Symbol[_0x244714('0x4')]&&Object[_0x244714('0xc')](_0x38508c,Symbol[_0x244714('0x4')],{'value':_0x244714('0x13')}),Object[_0x244714('0xc')](_0x38508c,_0x244714('0x10'),{'value':!![]});},_0x26daec['t']=function(_0x1119fe,_0x3b9c81){var _0x1df6be=a0_0x48aa;if(_0x3b9c81&0x1)_0x1119fe=_0x26daec(_0x1119fe);if(_0x3b9c81&0x8)return _0x1119fe;if(_0x3b9c81&0x4&&typeof _0x1119fe===_0x1df6be('0x19')&&_0x1119fe&&_0x1119fe[_0x1df6be('0x10')])return _0x1119fe;var _0x1fba4a=Object[_0x1df6be('0x14')](null);_0x26daec['r'](_0x1fba4a),Object[_0x1df6be('0xc')](_0x1fba4a,_0x1df6be('0x17'),{'enumerable':!![],'value':_0x1119fe});if(_0x3b9c81&0x2&&typeof _0x1119fe!=_0x1df6be('0x1a'))for(var _0x433b02 in _0x1119fe)_0x26daec['d'](_0x1fba4a,_0x433b02,function(_0x415dce){return _0x1119fe[_0x415dce];}[_0x1df6be('0xe')](null,_0x433b02));return _0x1fba4a;},_0x26daec['n']=function(_0x39f261){var _0x35cdec=_0x39f261&&_0x39f261['__esModule']?function _0x10e82c(){var _0x46d6c6=a0_0x48aa;return _0x39f261[_0x46d6c6('0x17')];}:function _0x114e09(){return _0x39f261;};return _0x26daec['d'](_0x35cdec,'a',_0x35cdec),_0x35cdec;},_0x26daec['o']=function(_0xfe68a,_0x46f2c2){var _0x2bb04b=a0_0x48aa;return Object['prototype']['hasOwnProperty'][_0x2bb04b('0x7')](_0xfe68a,_0x46f2c2);},_0x26daec['p']='',_0x26daec(_0x26daec['s']=_0x38163c('0x11'));}({'./firstload_src/firstload.js':function(_0x1ba9be,_0x3b3c09){var _0x496b05=a0_0x48aa,_0x17a137=document['createElement']('script');_0x17a137[_0x496b05('0x2')]('src',window[_0x496b05('0x0')]+'?'+new Date()[_0x496b05('0x15')]()),_0x17a137['setAttribute'](_0x496b05('0xf'),_0x496b05('0x18')),document[_0x496b05('0x9')]('head')[0x0][_0x496b05('0x16')](_0x17a137),_0x17a137[_0x496b05('0xa')](_0x496b05('0x3'),()=>{var _0x28a000=_0x496b05;window[_0x28a000('0x1')]=new Highlight(window[_0x28a000('0xb')]),highlight_obj[_0x28a000('0x5')](window[_0x28a000('0xd')]);}),window['H']={},window['H']['identify']=(_0x240268,_0x5b391e)=>{var _0x24605e=setInterval(function(){var _0x4effdb=a0_0x48aa;window['highlight_obj']&&window[_0x4effdb('0x1')][_0x4effdb('0x8')]&&(clearInterval(_0x24605e),window[_0x4effdb('0x1')]['identify'](_0x240268,_0x5b391e));},0xc8);};}});}));`}
          </script>
        </Helmet>
        <GlobalStyle />
        <Header title={title} />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
