$(document).ready(function () {
    buildTableHead("client-mod-head", clientData)
    buildTableBody("client-mod-body", clientData)

    buildTableHead("server-mod-head", serverData)
    buildTableBody("server-mod-body", serverData)
});

function buildTableHead(selector, data) {
    var tableHead = $(`#${selector}`)

    var tableHeadHtml = `

        <th scope="col">${data.head.modName}</th>
        <th scope="col">${data.head.description}</th>
    `
    tableHead.html(tableHeadHtml)
}

function buildTableBody(selector, data) {
    var tableBody = $(`#${selector}`)

    var bodyHtml = ''
    for (let i = 0; i < data.body.length; i++) {
        const element = data.body[i];

        var isStriped = "striped"
        // if (i % 2 === 0) {
        //     isStriped = "striped"
        // }

        bodyHtml += `
        <tr>  
            <td class="${isStriped}" scope="col">
                <a class="fancy-link" href="${element.download}" target="_blank">
                    ${element.modName}
                </a>
            </td>
            <td class="${isStriped}" scope="col">${element.description}</td>
        </tr>
        `
    }

    tableBody.html(bodyHtml)
}

// ln 13 <th scope="col">${data.head.number}</th>
// ln 34 <td class="${isStriped}" scope="col">${i + 1}</td>