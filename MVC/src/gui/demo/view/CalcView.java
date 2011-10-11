package gui.demo.view;

import gui.demo.model.CalcModel;

import java.awt.FlowLayout;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

/*
 * This View doesn't know about the Controller, except that it provides methods for registering 
 * a Controller's listeners. Other organizations are possible (eg, the Controller's listeners are 
 * non-private variables that can be referenced by the View, the View calls the Controller to get 
 * listeners, the View calls methods in the Controller to process actions, ...). 
 */
public class CalcView extends JFrame {
	
	//... Constants
    private static final String INITIAL_VALUE = "1";
    private static final long serialVersionUID = 8558595395395233866L;
    
    //... Components
    private JTextField m_userInputTf = new JTextField(5);
    private JTextField m_totalTf     = new JTextField(20);
    private JButton    m_multiplyBtn = new JButton("Multiply");
    private JButton    m_clearBtn    = new JButton("Clear");
    
    private CalcModel m_model;
    
    //======================================================= constructor
    /** Constructor */
    public CalcView(CalcModel model) {
        //... Set up the logic
        m_model = model;
        m_model.setValue(INITIAL_VALUE);
        
        //... Initialize components
        m_totalTf.setText(m_model.getValue());
        m_totalTf.setEditable(false);
        
        //... Layout the components.      
        JPanel content = new JPanel();
        content.setLayout(new FlowLayout());
        content.add(new JLabel("Input"));
        content.add(m_userInputTf);
        content.add(m_multiplyBtn);
        content.add(new JLabel("Total"));
        content.add(m_totalTf);
        content.add(m_clearBtn);
        
        //... finalize layout
        this.setContentPane(content);
        this.pack();
        
        this.setTitle("Simple Calc - MVC");
        // The window closing event should probably be passed to the 
        // Controller in a real program, but this is a short example.
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    
    public void reset() {
        m_totalTf.setText(INITIAL_VALUE);
    }
    
    public String getUserInput() {
        return m_userInputTf.getText();
    }
    
    public void setTotal(String newTotal) {
        m_totalTf.setText(newTotal);
    }
    
    public void showError(String errMessage) {
        JOptionPane.showMessageDialog(this, errMessage);
    }
    
    public void addMultiplyListener(ActionListener mal) {
        m_multiplyBtn.addActionListener(mal);
    }
    
    public void addClearListener(ActionListener cal) {
        m_clearBtn.addActionListener(cal);
    }
}
