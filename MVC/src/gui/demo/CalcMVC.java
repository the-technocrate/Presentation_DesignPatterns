package gui.demo;

import gui.demo.controller.CalcController;
import gui.demo.model.CalcModel;
import gui.demo.view.CalcView;


/*
 * Here the calculator is organized according the the Model-View-Controller (MVC) pattern. 
 * The idea is to separate the user interface (the Presentation) into a View 
 * (creates the display, calling the Model as necessary to get information), and Controller 
 * (responds to user requests, interacting with both the View and Model as necessary). 
 * 
 * The literature on MVC leaves room for a number of variations, but they all follow this basic idea. 
 * This model is simple and can be used with simple method calls. 
 * 
 * If there are more complex interactions (eg, the Model is asynchronously updated), 
 * an Observer pattern (listeners) may be required. 
 */

// The main program initializes everything and ties everything together. 
public class CalcMVC {
    //... Create model, view, and controller.  They are
    //    created once here and passed to the parts that
    //    need them so there is only one copy of each.
    @SuppressWarnings("unused")
	public static void main(String[] args) {
        
        CalcModel      model      = new CalcModel();
        CalcView       view       = new CalcView(model);
        CalcController controller = new CalcController(model, view);
        
        view.setVisible(true);
    }
}
 
