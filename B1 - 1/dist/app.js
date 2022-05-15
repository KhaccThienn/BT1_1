var person = [
    {
        name: 'Le Khac Thien',
        email: 'muzankibut112@gmail.com',
        phone: '0392689213',
        gender: 'nam',
        favourite: 'gaming, mixing, watching'
    },
];
var _html = '';
for (let key in person) {
    _html += `
            <table border="1" cellspacing="0" cellpadding="5">
                <thead>
                    Thong Tin
                </thead>
                <tbody>
                    <tr>
                        <td class="bold">Ho va Ten</td>
                        <td>${person[key].name}</td>
                    </tr>
                    <tr>
                        <td class="bold">Email</td>
                        <td>${person[key].email}</td>
                    </tr>
                    <tr>
                        <td class="bold">SDT</td>
                        <td>${person[key].phone}</td>
                    </tr>
                    <tr>
                        <td class="bold">Gender</td>
                        <td>${person[key].gender}</td>
                    </tr>
                    <tr>
                        <td class="bold">Favourites</td>
                        <td>${person[key].favourite}</td>
                    </tr>
                </tbody>
            </table>
        `;
}
var roots = document.getElementById('root');
roots.innerHTML = _html;
