import { staff } from "./staff";
import './ContactUs.css';

function ContactUs() {

    const displayStaff = staff.map((emp) => {
        return (
            <tr>
                <td>{emp.name}</td>
                <td>{emp.shiftTiming}</td>
                <td>{emp.email}</td>
                <td>{emp.contact}</td>
            </tr>
        )
    })

    return (
        <div class="container">
        <div class="library-info">
            <h1>Contact Us</h1>
            <p><strong>Library Address:</strong> 123 Library Street, City, Country</p>
            <p><strong>Contact Number:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> info@examplelibrary.com</p>
        </div>
        <div class="staff-info">
            <h2>Staff Schedule and Contact Info</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Shift Timings</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {displayStaff}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ContactUs