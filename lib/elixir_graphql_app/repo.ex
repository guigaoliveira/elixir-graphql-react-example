defmodule ElixirGraphqlApp.Repo do
  use Ecto.Repo,
    otp_app: :ElixirGraphqlApp,
    adapter: Ecto.Adapters.Postgres
end
