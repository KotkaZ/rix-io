import "./userpopup.css";
import {Menu} from "primereact/menu";
import {InputSwitch} from "primereact/inputswitch";
import React, {Component} from "react";
import {Avatar} from "primereact/avatar";
import history from '../../history';

export default class Userpopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false,
            stylePath: 'primereact/resources/themes/saga-blue/theme.css'
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.darkMode !== this.state.darkMode) {
            if (!this.state.darkMode) {
                import("primereact/resources/themes/saga-blue/theme.css");
                this.stylePath = ("primereact/resources/themes/saga-blue/theme.css");
                console.log("Changed to light mode!")
                console.log(this.stylePath)
            } else {
                import("primereact/resources/themes/vela-blue/theme.css");
                this.stylePath = ("primereact/resources/themes/vela-blue/theme.css");
                console.log("Changed to dark mode!")
                console.log(this.stylePath)
            }
            console.log("darkmode status:", this.state.darkMode)
        }
    }

    items() {
        return [
            {
                label: "Lambi Lõdvik",
                items: [
                    {
                        label: "Profile",
                        icon: "pi pi-users",
                        command: () => history.push('/userProfile')
                    },
                    {
                        label: "Direct Messages",
                        icon: "pi pi-comments",
                        command: () => history.push('/userMessages')
                    },
                    {
                        label: (
                            <div className="p-d-flex p-ai-center">
                                <span className="p-mr-2">Dark Mode</span>
                                <InputSwitch checked={this.state.darkMode}/>
                            </div>
                        ),
                        icon: "pi pi-moon",
                        command: () => this.changeDarkmode(),
                    },
                    {
                        label: "Settings",
                        icon: "pi pi-cog",
                        command: () => history.push('/userSettings')
                    },
                    {
                        label: "Log Out",
                        icon: "pi pi-sign-out",
                        command: () => {
                            console.log("Logout would happen!");
                            history.push('/userLogout')
                        },
                    },
                    {
                        label: "SingleThreadView",
                        command: () => history.push('/SingleThreadView')
                    },
                    {
                        label: "ThreadCreation",
                        command: () => history.push('/threadCreation')
                    },
                    {
                        label: "ThreadsView",
                        command: () => history.push('/threadsView')
                    },
                ],
            },
        ];
    }

    render() {
        return (
            <div className="UserPopup">
                <Avatar
                    shape="circle"
                    size="large"
                    image="https://i.guim.co.uk/img/media/976161556e63867b492868c15e86ea71b4165c52/0_165_5315_3189/master/5315.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b4e203c07941288dab171a18905ad374"
                    onClick={event => this.menu.toggle(event)}
                    aria-controls="popup_menu"
                    aria-haspopup
                />
                <Menu
                    id="popup_menu"
                    ref={el => (this.menu = el)}
                    popup
                    model={this.items()}

                />
            </div>
        );
    }

    changeDarkmode() {
        this.setState({darkMode: !this.state.darkMode})
    }
}
