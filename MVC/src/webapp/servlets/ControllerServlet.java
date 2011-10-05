package webapp.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import webapp.bean.ModelBean;

public class ControllerServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ModelBean modelBean = new ModelBean();

		modelBean.setFirstName(request.getParameter("first_name"));
		modelBean.setLastName(request.getParameter("last_name"));
		modelBean.setEmail(request.getParameter("email"));
		modelBean.setPhone(request.getParameter("phone"));

		request.setAttribute("modelBean", modelBean);

		getServletContext().getRequestDispatcher("/view.jsp").forward(request, response);
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		getServletContext().getRequestDispatcher("/view.jsp").forward(request, response);
	}
}
