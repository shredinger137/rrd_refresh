import React from "react"

export default function DuesForm() {
    return (
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_new">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="6YLAXWGK4F2GU" />
            <table>
                <tr>
                    <td>
                        <input type="hidden" name="on0" value="Membership Type" />Skater Dues
        </td>
                </tr>
                <tr>
                    <td>
                        <select name="os0">
                            <option value="Phoenix">Phoenix $51.84 USD</option>
                            <option value="Rec Skater">Burning Ember $41.84 USD</option>
                            <option value="Rec Skater (Tuesdays Only)">Rec Skater $31.84 USD</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="hidden" name="on1" value="Skater Name" />Skater Name
        </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" name="os1" maxLength="200" />
                    </td>
                </tr>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src={require('../img/buynow.gif')} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <br /><br />
                <p>Other payments: <a href="https://www.paypal.me/resurrectionrg" target="_new">click here.</a></p>
            </table>

        </form>
    )
}

