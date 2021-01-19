import React from "react"

function TableHead() {
    return (

        <table class="table table-dark">
            <thead>
                <div class="col-lg-10">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Number</th>
                    </tr>
                </div>
            </thead>
        </table>

    )
}

export default TableHead