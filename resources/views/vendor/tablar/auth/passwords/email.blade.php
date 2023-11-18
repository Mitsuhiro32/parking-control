@extends('tablar::auth.layout')

@section('content')
    <div class="page-single">
        <div class="container">
            <div class="row">
                <div class="col col-login mx-auto">
                    <div class="text-center mb-1 mt-5">
                        <a href="" class="navbar-brand navbar-brand-autodark">
                            <img src="{{ asset(config('tablar.auth_logo.img.path', 'assets/logo.svg')) }}" height="36"
                                class="navbar-brand-image d-inline-block align-middle" alt=""></a>
                    </div>
                    <form class="card" action="{{ route('password.email') }}" method="post" novalidate>
                        @csrf
                        <div class="card-body p-6">
                            <div class="card-title text-center">@lang('Olvidé mi contraseña')</div>
                            <div class="form-group">
                                <label class="form-label" for="exampleInputEmail1">@lang('Dirección de correo electrónico')</label>
                                <input type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                    id="email" name="email" aria-describedby="emailHelp"
                                    placeholder="Ingrese su correo electrónico" value="{{ old('email') }}" required
                                    autofocus>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="form-footer">
                                <div class="d-flex justify-content-between">
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary btn-block">@lang('Enviar nueva contraseña')</button>
                                    </div>
                                    <div class="col-auto ml-auto">
                                        <button type="button" onclick="window.history.back()"
                                            class="btn btn-danger">Volver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
