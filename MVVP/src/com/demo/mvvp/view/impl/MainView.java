package com.demo.mvvp.view.impl;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

import com.demo.mvvp.viewmodel.MainViewModel;

public class MainView extends JFrame{

	private static final long serialVersionUID = 1009985L;
	private final MainViewModel homePresenter = MainViewModel.getInstance();
	
	public MainView() {
		setSize(300, 300);
		JButton jButton = new JButton("Click On Me");
		jButton.addActionListener(new HomeActionListener());
		this.add(jButton);
	}
	
	public static void main(String[] args) {
		JFrame frame = new MainView();
		frame.setVisible(true);
	}
	
	private class HomeActionListener implements ActionListener{
		@Override
		public void actionPerformed(ActionEvent e) {
			
		}
	}
}
