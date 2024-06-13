library(shiny)
library(threejstable)

ui <- fluidPage(
  threejstableOutput('widgetOutput')
)

server <- function(input, output, session) {
  output$widgetOutput <- renderThreejstable(
    threejstable("Hello world!")
  )
}

shinyApp(ui, server)
