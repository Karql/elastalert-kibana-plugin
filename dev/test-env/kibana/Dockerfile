FROM docker.elastic.co/kibana/kibana:7.17.18

COPY ./plugins/elastalertKibanaPlugin-7.17.18.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-7.17.18.zip
