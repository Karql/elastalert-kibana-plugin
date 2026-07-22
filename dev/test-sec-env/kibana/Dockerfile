FROM docker.elastic.co/kibana/kibana:8.19.18

COPY ./plugins/elastalertKibanaPlugin-8.19.18.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.19.18.zip
