package com.vamsi.springreact.employee.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class HomeController {

//    @RequestMapping(value = "/")
//    public String index() {
//        return "index";
//    }

    @RequestMapping(value = "/")
    public RedirectView redirectWithUsingRedirectView() {
        return new RedirectView("/index.html");
    }

}
