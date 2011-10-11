package com.demo.mvp.web.client;

import com.demo.mvp.web.client.view.impl.HomeImpl;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class GWT_MVP implements EntryPoint {

	/**
	 * Create a remote service proxy to talk to the server-side Greeting service.
	 */
	public void onModuleLoad() {
		VerticalPanel home = new HomeImpl();
        RootPanel.get().add(home);
    }
}
