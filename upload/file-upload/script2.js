const inputtemplate = "<input class=\"file-input\" type=\"file\" name=\"file\" hidden accept=\"" + acceptedFileType + "\">"
const input = document.getElementsById("file-input")
const acceptedFileType = GETURLPARAMS(acceptedFileType)

function GETURLPARAMS (ParamName){
    const Params = URLSearchParams(window.location.search)
    console.info("got params. parameter INFO:" + "parameterName:" + ParamName + ", returned:" + Params.get(ParamName))
    return Params.get(ParamName)
}

input.outerHTML(inputtemplates)