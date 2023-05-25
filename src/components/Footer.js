import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="page-footer blue-grey darken-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <Link className="grey-text text-lighten-4 right" to='/'>More Links</Link>
                </div>
            </div>
        </footer>
    )
}
