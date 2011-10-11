package com.demo.mvp.web.client.view.impl;

import com.demo.mvp.web.client.presenter.HomePresenter;
import com.demo.mvp.web.client.view.Home;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class HomeImpl extends VerticalPanel implements Home {
	private final Label quoteText = new Label("Test.....");
	private final Button actionButton = new Button("Click On Me");
	private final HomePresenter homePresenter = new HomePresenter(this);
	
	public HomeImpl() {
		setSpacing(5);
		setSize("100px", "100px");
		add(quoteText);
		actionButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				homePresenter.clickOnMe(event.toString());
			}
		});
		add(actionButton);
	}
	
	@Override
	public void setHomeTitle(String title) {
		quoteText.setText(title);
	}
}
