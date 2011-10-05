package com.demo.mvp.view.impl;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;

import com.demo.mvp.presenter.HomePresenter;
import com.demo.mvp.view.Home;

//Class is not aware of model. Dedicated presenter handles all model related things.
public class HomeImpl extends JFrame implements Home {

	private static final long serialVersionUID = 1009985L;
	private final HomePresenter homePresenter = new HomePresenter(this);
	
	@Override
	public void showMessage(String message) {
		JOptionPane.showMessageDialog(this, message);
	}
	
	public HomeImpl() {
		setSize(300, 300);
		JButton jButton = new JButton("Click On Me");
		jButton.addActionListener(new HomeActionListener());
		this.add(jButton);
	}
	
	public static void main(String[] args) {
		JFrame frame = new HomeImpl();
		frame.setVisible(true);
	}
	
	private class HomeActionListener implements ActionListener{

		@Override
		public void actionPerformed(ActionEvent e) {
			homePresenter.clickOnMe(e.getActionCommand());
		}
	}
}
