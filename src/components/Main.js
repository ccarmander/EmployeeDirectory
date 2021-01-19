import React from "react"



export default class FetchRandomUser extends React.Component {

    state = {
        loading: true,
        people: []
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=30";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });


    }

    render() {
        if (this.state.loading) {
            return <div> loading...</div>
        }

        if (!this.state.people.length) {
            return <div>Nobody is coming...</div>
        }

        const peopleJsx = this.state.people.map(person => (
            <div key={person.login.uuid}>


                <container>

                    <table class="table table-dark">
                        <tbody>
                            <div class="col-lg-10">
                                <tr>

                                    <img src={person.picture.medium} alt="Random Person" />
                                    <td>{person.name.title}</td>
                                    <td>{person.name.first}</td>
                                    <td>{person.name.last}</td>
                                    <td>{person.cell}</td>

                                </tr>
                            </div>
                        </tbody>
                    </table>
                </container>
            </div >
        ))

        return (
            <div>
                {peopleJsx}
            </div>
        )
    }
}


