using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using senai.patri.webapi.Interfaces;
using senai.patri.webapi.ViewModel;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace senai.patri.webapi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public LoginController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Valida o usuário
        /// </summary>
        /// <param name="Login">Objeto login com o e-mail e a senha do usuário</param>
        /// <returns>Token com as informações do usuário</returns>
        /// dominio/api/Login
        [HttpPost]
        public IActionResult Post(LoginViewModel Login)
        {
            try
            {
                Usuario UsuarioBuscado = _usuarioRepository.Login(Login.Email, Login.Senha);

                if (UsuarioBuscado == null)
                {
                    return NotFound("E-mail ou senha inválidos!");
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, UsuarioBuscado.Email),

                    new Claim(JwtRegisteredClaimNames.Jti, UsuarioBuscado.IdUsuario.ToString()),

                    new Claim(ClaimTypes.Role, UsuarioBuscado.Tipo),
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("patri-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "senai.patri.webApi",
                    audience: "senai.patri.webApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(60),
                    signingCredentials: creds
                );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
