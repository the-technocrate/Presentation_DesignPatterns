package gui.swing.view;

import java.awt.BorderLayout;

import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

public class ContactDisplayView extends JPanel implements ContactView {
	private JTextArea display;

	public ContactDisplayView() {
		createGui();
	}

	public void createGui() {
		setLayout(new BorderLayout());
		display = new JTextArea(10, 40);
		display.setEditable(false);
		JScrollPane scrollDisplay = new JScrollPane(display);
		this.add(scrollDisplay, BorderLayout.CENTER);
	}

	public void refreshContactView(String newFirstName, String newLastName, String newTitle, String newOrganization) {
		display.setText("UPDATED CONTACT:\nNEW VALUES:\n" + "\tName: " + newFirstName + " " + newLastName + "\n"
				+ "\tTitle: " + newTitle + "\n" + "\tOrganization: " + newOrganization);
	}
}
