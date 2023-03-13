/**
 * @module ar_app/js/common-i.js
 * @fileoverview Home of the common parts to be injected into the HTML pages of the App.
 * @author Miguel Gastelumendi <mgd@satelier.com.br>
 * @copyright Software Atelier 2022
 * @version 2022.10.06
 */
/* cSpell:locale en pt-br */
//@ts-check

// 'Global' sections
const sections = {};

sections.header = 
'<table>'+
'<tbody>'+
'<tr class="p-3">'+
'<td width="46">'+
    '<img src="assets/argowLogo-A.gif" width="42" height="42" alt="Argow&#39;s logo" />'+
'</td>'+
'<td>'+
    '<span class="titulo">'+
'Argow'+
'</span>'+
'<br>'+
    '<span class="subtitulo">Solution ready!</span>'+
'</td>'+
'<td valign="bottom"  align="right">'+
    '<a class="home" href="https://argow.com.br/argowhowto.htm"><img alt="&gt;o eu?" title="&gt;o eu?" class="home" src="assets/btn_howto.gif"></a>:'+
    '<a class="home" href="https://argow.com.br/argowevent.htm">'+
      '<img alt="Eventos" title="Eventos" class="home" src="assets/btn_event.gif">'+
        '</a>:'+
    '<a class="home" href="https://argow.com.br/argowscript.htm">'+
      '<img alt="ArScript" title="ArScript" class="home" src="assets/btn_script.gif">'+
        '</a>:'+
    '<a class="home" href="https://argow.com.br/metadata.htm">'+
      '<img alt="Metadados" title="Metadados" border="0" src="assets/btn_metadata.gif">'+
        '</a>:'+
    '<a class="home" href="https://argow.com.br/argowsearch.htm">'+
      '<img title="Busca" alt="Busca" border="0" src="assets/btn_search.gif">'+
        '</a>:'+
    '<a class="home" href="http://www.argow.com.br/">'+
      '<img border="0" title="Home" alt="Home" src="assets/btn_home.gif">'+
        '</a>'+
'</td>'+
'</tr>'+
'</tbody>'+
'</table>';

sections.modalExplanation =
    '<h1>I-Common</h1>'+
    '<p><del>Increase your code reausability!</del></p>'+
    '<h2>What is it?</h2>'+
    '<p>It`s free software available from <em>SAtelier</em> that provides a solution for the HTML code reuse, requiring only a <code>.html</code> file and a <code>.js</code> file.</p>'+
    '<h2>How does it work?</h2>'+
    '<p>The <em>i-common</em> was created to make HTML Reusable in as many HTML pages as you want.'+ 
    'Throughout the <code>i-common.js</code> importation in the HTML file, you can add the code you want to reuse as many times as you want and in as many HTML files as you need.</p>';

sections.modalManual =
'<button onclick="closeModal()" class="p-1">&times;</button>'+
'<div id="manual">'+
'<h1>The I-Common Manual</h1>'+
'<h4><strong>Step 1:</strong>Clone or download the repository  <a href="https://github.com/LadyJessie19/i-common" target="_blank" id="linkIcommon"><strong>i-common</strong></a>.</h4>'+
'<p>In the i-common repository, the <code>i-common.js</code> file and a folder with i-common use examples will be available.</p>'+
'<p>Cut or copy the <code>i-common.js</code> file to the same folder where the HTML you will be using it.</p>'+
'<h4><strong>Step 2:</strong> Open the HTML file that you will be using.</h4>'+
'<h4><strong>Step 3:</strong> Create a <code>div</code> where you want to place the reusable code.</h4>'+
'<p> Add to this <code>div</code> the id <code>ar:ic-target</code>;</p>'+
'<p>Example ⬇:</p>'+
'<blockquote><code>&lt;div id="ar:ic-target"&gt;&lt;/div&gt;</code><button onclick="copyCode(DIV)"><img width="17px" src="assets/copy-regular.svg" alt="copyIcon"></button></blockquote>'+
'<h4><strong>Step 4:</strong> Import the <code>i-common.js</code> file into the HTML that you will be using.</h4>'+
'<p>Example ⬇:</p>'+
'<blockquote><code>&lt;script src="i-common.js" id="ar:ic-config" data-ar:ic-sec="your_HTML_section"&gt;&lt;/script&gt;</code>'+
'<button onclick="copyCode(SCRIPT)"><img width="17px" src="assets/copy-regular.svg" alt="copyIcon"></button></blockquote>'+
'<div id="buttonsModal" class="mr-3">'+
'<button onclick="showHTML()">How To Set The HTML Code</button>'+
'<button>How To Set The Script File</button>'+
'</div>'+
'</div>';

sections.modalHTML =
'<div id="modalHTML" class="modalContent">'+
    '<button onclick="closeModal()" class="p-1">&times;</button>'+
    '<h1>How to set the HTML That You`ll be using</h1>'+
    '<ol>'+
        '<li>Open the <code>i-common.js</code> file and go to // `Global` Sections (line 9);</li>'+
        '<li>You can follow the section example (<code>sections.example</code>) and create an object with your HTML code;</li>'+
    '</ol>'+
    '<img src="assets/sections_example.png" alt="example">'+
    '<h3>REMENBER!</h3>'+
    '<ul>'+
        '<li>Create an object inside the object <code>sections</code>;</li>'+
        '<li>Each code line needs to be wrapped in <em>simple quotes</em>(``);</li>'+
        '<li>Each code line needs to end with <em>plus sign</em> (+);</li>'+
        '<li>At the end of the HTML code don`t forget the <em>semicolon</em> (;);</li>'+
    '</ul>'+
'</div>';

sections.modalScript = 
'<button onclick="closeModal()" class="p-2">&times;</button>'+
'<div class="d-flex flex-column justify-content-center align-items-center">'+
'<h1>How to import the script</h1>'+
'<ol>'+
    '<h6>Step by step:</h6>'+
    '<li>Create a <code>script</code> tag;</li>'+
    '<li>Set the path to the <code>i-common.js</code> file;</li>'+
    '<li>Set the id <code>ar:ic-config</code> to the script file;</li>'+
    '<li>Set the <code>data-ar:ic-sec</code> attribute with which <code>HTML section*</code> you want to use.</li>'+
    '<li><em>There it goes!</em> The reusable HTML will be placed in the <code>div</code> you seated with the id <code>ar:ic-target</code>.</li>'+
    '<p><em><sub>*(the object that you created in the section at the <code>i-common.js</code>)</sub></em></p>'+
'</ol>'+
'<h6>Example ⬇</h6>'+
'<blockquote>'+
  '<code>&lt;script src="i-common.js" id="ar:ic-config" data-ar:ic-sec="your_HTML_section"&gt;&lt;/script&gt;</code>'+
    '<button onclick="copyCode(SCRIPT)"><img width="17px" src="assets/copy-regular.svg" alt="copyIcon"></button>'+
    '</blockquote>'+
'</div>';

/**
 * @typedef {Object<string, string|number>} IcVariables
 */

/**
 * Replaces keys for values
 * @param {string} sHtml
 * @param {IcVariables?} dicVar
 */
const icReplace = (sHtml, dicVar) => {
  if (dicVar == null) {
    return sHtml;
  }
  // TODO
  return sHtml;
};

/**
 * Injects an array of sections as child nodes to the target element (whose ID is sIdTarget)
 * after replacing variables from the dictionary.
 * @param {string} sIdTarget
 * @param {Array<string>} aSections
 * @param {IcVariables?} dicVar
 */
const injectCommon = (sIdTarget, aSections, dicVar) => {
  const tagById = (/** @type{string} */ sId) => document.getElementById(sId);
  // TODO: create an hidden div with to keep track of the injected sections
  const tagGlobalTarget = document.body;
  let tagDefaultTarget = (sIdTarget == null || ("" + sIdTarget).trim() == "") ? null : tagById(sIdTarget);
  if (tagDefaultTarget == null) {
    tagDefaultTarget = tagGlobalTarget;
  }
  // Compatibility aSections.forEach((item) => {
  for (let i = 0; i < aSections.length; i++) {
    const item = aSections[i];

    // an item is:  sectionKey || sectionKey>target
    const aKeyAndTarget = ("" + item).split(">");
    const sKey = aKeyAndTarget[0].trim();
    const sTarget = aKeyAndTarget.length > 1 ? aKeyAndTarget[1].trim() : "";
    let tagTmp;
    const tagTarget = /** @type {HTMLElement} */ (
      ((sTarget == "") || (null == (tagTmp = tagById(sTarget)))) ? tagDefaultTarget : tagTmp
    );
    if ((tagTarget != null) && (Object.keys(sections).find(s => s == sKey))) {
      const tag = document.createElement("div");
      const sHtml = icReplace(sections[sKey], dicVar);
      tag.innerHTML = sHtml;
      tagTarget.appendChild(tag);
    }
  }; //}
};

/**
 * Reads the configuration from an attribute of the element (whose ID is sIdConfig)
 * and injects it into the element sIdTarget.
 * @param {string} sIdTarget
 * @param {string} sIdConfig
 * @param {string} sAttribSec
 * @param {string} sAttribVar
 */
const injectCommonFromTag = (sIdTarget, sIdConfig, sAttribSec, sAttribVar) => {
  const tagConfig = document.getElementById(sIdConfig);
  if (tagConfig == null) {
    return;
  }
  const sSections = tagConfig.getAttribute(sAttribSec);
  let aSections = [];
  if (sSections == null) {
    return;
  } else if (sSections == "*") {
    // inject all global `sections` // TODO: check:
    //Compatibility Object.keys(sections).forEach((s) => aSections.push(s));
    for (let i = 0; i < Object.keys(sections).length; i++) { aSections.push(sections[i]) }
  } else {
    aSections = sSections
      .split(",")
      .map(e => e.trim())
      .filter(e => e != "");
  }
  const dicVar = /** @type {IcVariables} */ ({});
  injectCommon(sIdTarget, aSections, dicVar);
};

//-----------------------
/**
 * » ID of an element that have the configuration attributes.
 * » It's usually the same as the script (see below for an example).
 */
const icIdConfig = "ar:ic-config";

/**
 * » Configuration attribute: `Target`.
 * » Default target element's id, optional.
 */
const icIdTarget = "ar:ic-target";

/**
 * » Configuration attribute: `Sections`.
 * » A list of sections (separate by ,) to inject.
 * » If the attribute's value is '*' or no attribute at all, then
 *   all sections are injected.
 * » A section is one of the string properties of the class `sections`.
 *   See above (fist code line) `const sections = {};`
 * » Optionally, each item can be follow by a gt (>) and a target's id.
 * » If no '> target id' is specified, the default 'Target'
 *   (see attribute `Target`) will be used.
 * » If there is no default 'Target' or only the gt (>) is used, the target
 *    will be `body`.
 */
const icAttribSections = "data-ar:ic-sec";

/**
 * » Configuration attribute: `Dictionary`.
 * » A dictionary<key, value> to replace variables in the HTML code
 * » not implemented
 */
const icAttribDictionary = "data-ar:ic-dic";

{
  injectCommonFromTag(
    icIdTarget,
    icIdConfig,
    icAttribSections,
    icAttribDictionary
  );
}
//eof
