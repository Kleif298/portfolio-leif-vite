const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto text-center">
                <p>
                &copy; {new Date().getFullYear()} My Website. All rights reserved.
                </p>
                <p>
                Built with ❤️ using React and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}

export default Footer;