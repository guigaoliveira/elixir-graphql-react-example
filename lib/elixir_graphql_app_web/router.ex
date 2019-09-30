defmodule ElixirGraphqlAppWeb.Router do
  use ElixirGraphqlAppWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL, schema: ElixirGraphqlAppWeb.Schema

    forward "/", Absinthe.Plug, schema: ElixirGraphqlAppWeb.Schema
  end
end
