<html>
  <head>
    <title>Simple MVC</title>
  </head>
  <body>
    <h2>Simple MVC</h2>  
    <form method="post" action="simple-mvc">
      <table>
        <tr>
          <td>
            First Name:
          </td>
          <td>
            <input type="text" 
                   name="first_name" 
                   value="${modelBean.firstName}" />
          </td>
        </tr>
        <tr>
          <td>
            Last Name:
          </td>
          <td>
            <input type="text" 
                   name="last_name" 
                   value="${modelBean.lastName}" />
          </td>
        </tr>
        <tr>
          <td>
            Email:
          </td>
          <td>
            <input type="text" 
                   name="email" 
                   value="${modelBean.email}" />
          </td>
        </tr>
        <tr>
          <td>
            Phone:
          </td>
          <td>
            <input type="text" 
                   name="phone"
                   value="${modelBean.phone}" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="submit" name="enter_button" value="Enter" />
          </td>
          <td>
          </td>
        </tr>
      </table>
    </form>
    <pre>
      ${modelBean.message}
    <pre>
  </body>
</html>
