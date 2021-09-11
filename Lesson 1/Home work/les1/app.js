let datas = [
    {
        "ava": "https://lh3.googleusercontent.com/1hCWMEhDVua6ey6fbzzGQiDYoUhVuQ9ArIEAz6pAGet_ft7FGbw0aePHQrfxGJcGTOGFXFQNALz9AfDKveA=w500-rw",
        "name": "NAME: APPLE MacBook Air 2020 MVH42SA/A",
        "error": "Product error 375",
        "sku": "200500598",
        "id": "1",
        "color": "0",
    },
    {
        "ava": "https://lh3.googleusercontent.com/9t4ddHZRUlpZWJqdzDcMKDu95AN-2mUuZ0NtFwjTZrbxmvutQP0c6uJsQN4H0kHmXPB4NxRnEtSO1_vfATHwBHrrCVkq-3EV9Q=w500-rw",
        "name": "NAME: Laptop ACER Nitro 5 AN515",
        "error": "Product error 102",
        "sku": "210400697",
        "id": "2",
        "color": "2",
    },
    {
        "ava": "https://lh3.googleusercontent.com/yq3aKWkFbGOVffAL5sKX80iLRKbOlN2I6gPsxzUL6C4J0y5WFjtgrVHWcNYt-cHnzrtqLuFQEcRiVHWRBHb3=w500-rw",
        "name": "NAME: Smart Tivi QLED Samsung 8K QA85",
        "error": "Product error 202",
        "sku": "200301291",
        "id": "3",
        "color": "0",
    },
    {
        "ava": "https://lh3.googleusercontent.com/Tr6kHgHOWmkF75RMPGEqKnno5-kiON9_jBapZOXPNkd1E7BskrELI05JePU0BYBN7n9kd38Ukk91F30ouQ=w500-rw",
        "name": "NAME: iPhone 12 64GB White MGJ63VN/A",
        "error": "Product error 180",
        "sku": "201000614",
        "id": "4",
        "color": "1",
    },
    {
        "ava": "https://lh3.googleusercontent.com/Lji9yh8e2VIYfT1JIzPctWZ4kVf9T4RRTQJYURCO1Sw734BJoUfgtH8jmRvDYs77xHvSb5RQFjJNyYkYWycWOw_CaclpWAZO=w500-rw",
        "name": "NAME: Apple iPad Gen 8th (2020) 10.2",
        "error": "Product error 180",
        "sku": "201000858",
        "id": "5",
        "color": "1",
    },
    {
        "ava": "https://lh3.googleusercontent.com/2pSNoAP_D8BUKT67cMwQsPQA2K5KhsZazMPhf9jbTOoHRZzBDKfMIAbcrzU2sOpBkZwdegr8WZ6AM15bh7o=w500-rw",
        "name": "NAME: Apple Watch S5 (GPS) 44mm",
        "error": "Product error 420",
        "sku": "191002060",
        "id": "6",
        "color": "6",
    },
    {
        "ava": "https://lh3.googleusercontent.com/l8h4l6kN6M9C0ggZHt_m9cFrs8J3lqqsH0wXcmpBerbzispKHgr6l38GT9TcyHdTJi99BAI5lBG5mIMwGu2oZkME9BUoG7wP=w500-rw",
        "name": "NAME: Logitech G502 Hero KDA",
        "error": "Product error 301",
        "sku": "210401689",
        "id": "7",
        "color": "1",
    },
    {
        "ava": "https://lh3.googleusercontent.com/FrLl2mz0Wv9pdee1LI6Jimi7fgiV3AbiQoHsRleG02MLrNpb4XEyVNEYGP0I9ovojIwslCNcGY3ZgFey2aw6-bf4hnzH8-Gt=w500-rw",
        "name": "NAME: Logitech G840 XL KDA",
        "error": "Product error 900",
        "sku": "210401693",
        "id": "8",
        "color": "5",
    }
]
let formItem = document.getElementById("item");
function createData (data) {
    let ava = data.ava;
    let name = data.name
    let error = data.error;
    let sku = data.sku;
    let id = data.id;
    let color = data.color;
    let dataHtml = `
        <div class="bi" d-flex">
            <img class="img" src="${ava}" alt="">
            <div class="h-end">${name}</div>
            <ol>
                <li>Error: ${error}</li>
                <li>SKU: ${sku}</li>
                <li>ID: ${id}</li>
                <li>Color: ${color}</li>
            </ol>
        </div>`;
    return(dataHtml);
}
function renderTr(dataTr){
for(let i = 0; i < dataTr.length; i++){
    let formI = createData(datas[i]);
    formItem.insertAdjacentHTML("beforeend", formI);
}
}
renderTr(datas);