import React, { Component } from 'react'
import Footer from '../utils/Footer';
import Header from '../utils/Header';
import Login from "./Lgoin";



class HomePageLogin extends Component {
    state = {}
    render() {
        return (
            <div>
                <header>
                    <Header/>
                </header>
                <main>
                    <Login />
                </main>
                 <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default HomePageLogin;